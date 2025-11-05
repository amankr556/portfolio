class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // API se handle karwane wala function
  async handleApiQuery(message) {
    try {
      const response = await fetch('/api/chat', { // API route ka path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const botMessage = this.createChatBotMessage(data.reply);
      this.updateChatbotState(botMessage);

    } catch (error) {
      console.error("Error fetching from API:", error);
      const errorMessage = this.createChatBotMessage("Sorry, server pe kuch gadbad ho gayi.");
      this.updateChatbotState(errorMessage);
    }
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;