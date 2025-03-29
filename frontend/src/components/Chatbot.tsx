import React, { forwardRef, useImperativeHandle } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

type Message = {
  text: string;
  isBot: boolean;
};

type ChatBotHandle = {
  toggleChat: () => void;
};

const ChatBot = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      text: "Hi! I'm your math helper. Ask me anything about the problem!",
      isBot: true,
    },
  ]);
  const [inputText, setInputText] = React.useState("");
  const slideAnim = React.useRef(new Animated.Value(300)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? 0 : 300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  useImperativeHandle(ref, () => ({
    toggleChat: () => {
      setIsOpen(prev => !prev);
    }
  }));

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, isBot: false }]);
      setInputText("");
      // Here you'll later add the API call to your chatbot
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

      <View style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.isBot ? styles.botMessage : styles.userMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ask me about the problem..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>↑</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
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
