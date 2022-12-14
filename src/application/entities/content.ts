export class Content {
  private readonly content: string;

  private validateCOntentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  get value(): string {
    return this.content;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateCOntentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }

    this.content = content;
  }
}
