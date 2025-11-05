class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    // Hum sab kuch API se hi handle karwayenge
    this.actionProvider.handleApiQuery(message);
  }
}

export default MessageParser;