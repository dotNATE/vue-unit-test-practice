import MessageDisplay from "@/components/MessageDisplay.vue";
import { flushPromises, mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";

jest.mock("@/services/axios");
beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageDisplay", () => {
  it("Calls getMessage and displays message", async () => {
    const mockMessage = "Hello from the db!";
    getMessage.mockResolvedValueOnce({ text: mockMessage });
    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const message = wrapper.find("[data-testid='message']").text();
    expect(message).toEqual(mockMessage);
  });

  it("Displays an error when getMessage call fails", async () => {
    const mockErrorMessage = "Oops! Something went wrong.";
    getMessage.mockRejectedValueOnce(mockErrorMessage);
    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const displayedError = wrapper.find("[data-testid='message-error']").text();
    expect(displayedError).toEqual(mockErrorMessage);
  });
});
