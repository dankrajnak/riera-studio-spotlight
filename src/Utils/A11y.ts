export default class A11y {
  static clickOrKeyboard(
    handler: (Event) => unknown,
    keys = ["Space"]
  ): { onClick: (Event) => unknown; onKeyPress: (Event) => unknown } {
    return {
      onClick: handler,
      onKeyPress: (event: KeyboardEvent) => {
        if (keys.includes(event.key)) {
          handler(event);
        }
      },
    };
  }
}
