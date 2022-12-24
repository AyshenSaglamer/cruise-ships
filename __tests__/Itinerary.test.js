describe("itinerary", () => {
  xit("can be instantiated", () => {
    expect(new ports()).toBeInstanceOf(object);
  });
  xit("can have ports", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");

    const itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
