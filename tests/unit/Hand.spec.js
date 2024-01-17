import { mount } from "@vue/test-utils";
import Hand from "@/components/Hand.vue";

describe("Test Hand component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Hand);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render component with default props", () => {
    // Assert
    expect(wrapper.find(".hand").exists()).toBe(true);
    expect(wrapper.find(".hand-number").exists()).toBe(true);
    expect(wrapper.find(".hand-text").exists()).toBe(true);
    expect(wrapper.find(".hand-number").text()).toBe("");
    expect(wrapper.find(".hand-text").text()).toBe("");
  });

  it("should render component with given props", async () => {
    // Arrange
    const hand = { number: "18", text: "T.Nyolc" };
    wrapper.setProps({ hand });
    await wrapper.vm.$nextTick();
    // Assert
    expect(wrapper.find(".hand-number").text()).toBe(hand.number);
    expect(wrapper.find(".hand-text").text()).toBe(hand.text);
  });
});
