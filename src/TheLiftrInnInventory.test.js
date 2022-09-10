import { Shop, Item } from './TheLiftrInnInventory'

describe("TheLiftrInnInventory Rose", function() {
  it("should foo", function() {
    const theLiftrInn = new Shop([new Item("foo", 0, 0, 0)]);
    const items = theLiftrInn.updateQuality();
    expect(items[0].name).toBe("fixme");
  });
});
