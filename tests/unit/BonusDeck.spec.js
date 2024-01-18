import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import BonusDeck from "@/components/BonusDeck";

const localVue = createLocalVue();
localVue.use(Vuex);

const mockSetBonusDeckIsWin = jest.fn();
mockSetBonusDeckIsWin.mockReturnValue("setBonusDeckIsWin", true);

const mockSetBonusDeckPrize = jest.fn();
mockSetBonusDeckPrize.mockReturnValue("setBonusDeckPrize", 1000);

const store = new Vuex.Store({
  actions: {
    setBonusDeckIsWin: mockSetBonusDeckIsWin,
    setBonusDeckPrize: mockSetBonusDeckPrize,
  },
});

describe("Test Bonus Deck component", () => {
  let wrapper;

  it("should renders correctly", async () => {
    wrapper = mount(BonusDeck, { localVue, store });
    await wrapper.vm.$nextTick();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".bonus-deck").exists()).toBe(true);
  });

  it("should initializes bonusDeck and hands correctly", async () => {
    wrapper = mount(BonusDeck, { localVue, store });
    await wrapper.vm.$nextTick();

    const hand1 = wrapper.vm.hand1;
    const hand2 = wrapper.vm.hand2;
    const hand3 = wrapper.vm.hand3;

    expect(wrapper.vm.bonusDeck).toHaveLength(3);

    // Ensure hand1, hand2, hand3 are initialized
    expect(typeof hand1.number).toBe("number");
    expect(typeof hand2.number).toBe("number");
    expect(typeof hand3.number).toBe("number");
    expect(typeof hand1.text).toBe("string");
    expect(typeof hand2.text).toBe("string");
    expect(typeof hand3.text).toBe("string");
  });

  it("generates bonus deck correctly for a win scenario", async () => {
    const expectedSum = 21;

    wrapper = mount(BonusDeck, { localVue, store });
    // Mock generateBonusDeckChance to return true
    wrapper.vm.generateBonusDeckChance = jest.fn(() => true);

    await wrapper.vm.$nextTick();

    const hand1 = wrapper.vm.hand1.number;
    const hand2 = wrapper.vm.hand2.number;
    const hand3 = wrapper.vm.hand3.number;

    const sum = hand1 + hand2 + hand3;

    expect(wrapper.vm.bonusDeck).toHaveLength(3);
    expect(sum).toBe(expectedSum);
  });

  it("generates bonus deck correctly for a loose scenario", async () => {
    const expectedSum = 21;

    wrapper = mount(BonusDeck, { localVue, store });
    // Mock generateBonusDeckChance to return true
    wrapper.vm.generateBonusDeckChance = jest.fn(() => false);

    await wrapper.vm.$nextTick();

    const hand1 = wrapper.vm.hand1.number;
    const hand2 = wrapper.vm.hand2.number;
    const hand3 = wrapper.vm.hand3.number;

    const sum = hand1 + hand2 + hand3;

    expect(wrapper.vm.bonusDeck).toHaveLength(3);
    expect(sum).not.toBe(expectedSum);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
