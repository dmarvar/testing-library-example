import { logRoles, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("should render correctly without changes", () => {
    const { baseElement, debug } = render(<App />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();

    logRoles(baseElement);

    expect(baseElement).toMatchSnapshot();

    expect.assertions(1);
  });

  it("should increment count until 3 and then show success message", async () => {
    render(<App />);

    const button = screen.getByRole("button");
    const count = screen.getByTestId("counter-test-id");

    expect(count.innerHTML).toBe("0");

    userEvent.click(button);
    expect(count.innerHTML).toBe("1");

    userEvent.click(button);
    expect(count.innerHTML).toBe("2");

    userEvent.click(button);
    expect(count.innerHTML).toBe("3");

    const finalText = await screen.findByText("Great Work!");

    await waitFor(() => expect(finalText).toBeInTheDocument());
  });
});
