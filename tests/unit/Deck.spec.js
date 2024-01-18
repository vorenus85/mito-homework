import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import Deck from "@/components/Deck";

const localVue = createLocalVue();
localVue.use(Vuex);

const mockSetMainDeckIsWin = jest.fn();
mockSetMainDeckIsWin.mockReturnValue("setMainDeckIsWin", true);

const mockSetMainDeckPrize = jest.fn();
mockSetMainDeckPrize.mockReturnValue("setMainDeckPrize", 1000);

const store = new Vuex.Store({
  actions: {
    setMainDeckIsWin: mockSetMainDeckIsWin,
    setMainDeckPrize: mockSetMainDeckPrize,
  },
});

describe("Test Deck component", () => {
  let wrapper;

  it("should renders ", async () => {
    wrapper = mount(Deck, { localVue, store });

    await wrapper.vm.$nextTick();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".deck").exists()).toBe(true);
  });

  it("should initializes data and calls initDeck on mounted", async () => {
    wrapper = mount(Deck, { localVue, store });

    await wrapper.vm.$nextTick();

    const dealer = wrapper.vm.dealer;
    const hand1 = wrapper.vm.hand1;
    const hand2 = wrapper.vm.hand2;
    const hand3 = wrapper.vm.hand3;
    const hand4 = wrapper.vm.hand4;

    expect(typeof dealer.number).toBe("number");
    expect(typeof hand1.number).toBe("number");
    expect(typeof hand2.number).toBe("number");
    expect(typeof hand3.number).toBe("number");
    expect(typeof hand4.number).toBe("number");
    expect(typeof dealer.text).toBe("string");
    expect(typeof hand1.text).toBe("string");
    expect(typeof hand2.text).toBe("string");
    expect(typeof hand3.text).toBe("string");
    expect(typeof hand4.text).toBe("string");
  });

  it("generates deck correctly for a dealer win scenario", async () => {
    wrapper = mount(Deck, { localVue, store });
    // Mock generateBonusDeckChance to return true
    wrapper.vm.calcPlayerIsWinOnMainDeck = jest.fn(() => 60);

    await wrapper.vm.$nextTick();

    const dealer = wrapper.vm.dealer;
    const hand1 = wrapper.vm.hand1;
    const hand2 = wrapper.vm.hand2;
    const hand3 = wrapper.vm.hand3;
    const hand4 = wrapper.vm.hand4;
    const deckWin = wrapper.vm.deckWin;

    expect(dealer.number).toBeGreaterThan(hand1.number);
    expect(dealer.number).toBeGreaterThan(hand2.number);
    expect(dealer.number).toBeGreaterThan(hand3.number);
    expect(dealer.number).toBeGreaterThan(hand4.number);
    expect(deckWin).toBe(false);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
