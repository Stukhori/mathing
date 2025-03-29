import React, { forwardRef, useImperativeHandle } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ActivityIndicator,
  ScrollView,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
} from "react-native";
import api from "../api/client"; // Your configured axios instance

type Message = {
  text: string;
  isBot: boolean;
};

type ChatBotProps = {
  taskId: number; // Explicitly define the expected prop
};

export type ChatBotHandle = {
  toggleChat: () => void;
};

const ChatBot = forwardRef<ChatBotHandle, ChatBotProps>(({ taskId }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [inputText, setInputText] = React.useState("");
  const [sessionId, setSessionId] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(300)).current;
  const messagesEndRef = React.useRef<ScrollView>(null);

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  // Initialize or reset chat when opening
  React.useEffect(() => {
    if (isOpen) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      if (!sessionId) {
        initializeChat();
      }
    } else {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen]);

  const initializeChat = async () => {
    try {
      setIsLoading(true);
      const response = await api.post("/chat/sessions", { taskId });

      if (response.data?.id) {
        setSessionId(response.data.id);
        const initialMessage =
          response.data.initialMessage ||
          "Hello! I'm here to help you with this math problem. What part are you struggling with?";

        setMessages([{ text: initialMessage, isBot: true }]);
      } else {
        throw new Error("No session ID received");
      }
    } catch (error) {
      console.error("Chat initialization failed:", error);

      let errorMessage = "Sorry, I couldn't connect to the chat service.";
      if (error.response?.status === 401) {
        errorMessage = "Please sign in to use the chat feature.";
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      setMessages([{ text: errorMessage, isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  useImperativeHandle(ref, () => ({
    toggleChat,
  }));

  const sendMessage = async () => {
    if (!inputText.trim() || !sessionId || isLoading) return;

    const userMessage = { text: inputText, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    try {
      setIsLoading(true);
      const response = await api.post("/chat/messages", {
        sessionId,
        message: inputText,
      });

      if (response.data?.response) {
        setMessages((prev) => [
          ...prev,
          { text: response.data.response, isBot: true },
        ]);
      }
    } catch (error) {
      console.error("Message sending failed:", error);

      let errorMessage = "Sorry, I couldn't process your message.";
      if (error.response?.status === 401) {
        errorMessage = "Session expired. Please refresh the chat.";
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      setMessages((prev) => [...prev, { text: errorMessage, isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (e.nativeEvent.key === "Enter" && !e.nativeEvent.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Math Helper</Text>
        <TouchableOpacity onPress={toggleChat}>
          <Text style={styles.closeButton}>×</Text>
        </TouchableOpacity>
      </View>

      {/* Replace View with ScrollView for messages container */}
      <ScrollView
        ref={messagesEndRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContentContainer}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.isBot ? styles.botMessage : styles.userMessage,
            ]}
          >
            <Text
              style={[
                styles.messageText,
                message.isBot ? {} : { color: "#fff" },
              ]}
            >
              {message.text}
            </Text>
          </View>
        ))}
        {isLoading && (
          <View style={[styles.messageBubble, styles.botMessage]}>
            <ActivityIndicator size="small" color="#6637a1" />
          </View>
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ask me about the problem..."
          placeholderTextColor="#888"
          editable={!isLoading && !!sessionId}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
          disabled={!inputText.trim() || isLoading || !sessionId}
        >
          <Text style={styles.sendButtonText}>↑</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  loadingBubble: {
    alignSelf: "flex-start",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    marginBottom: 8,
  },
  container: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: "#fff",
    borderLeftWidth: 1,
    borderLeftColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#6637a1",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    color: "#fff",
    fontSize: 24,
    lineHeight: 24,
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  botMessage: {
    backgroundColor: "#f0f0f0",
    alignSelf: "flex-start",
  },
  userMessage: {
    backgroundColor: "#6637a1",
    alignSelf: "flex-end",
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    padding: 12,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: "#6637a1",
    borderRadius: 20,
    padding: 12,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ChatBot;
