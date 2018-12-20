import React from 'react';
import manageBand from './manageBand';

describe("manageBand", () => {
  it("initialize state.bands to empty array", () => {
    let action = { type: '@@INIT' };
    expect(manageBand(undefined, action)).toEqual({ bands: [] });
  });
  it("adds a band", () => {
    let action = { type: 'ADD_BAND', name: "Pat the Bunny" }
    let result = manageBand({ bands: [] }, action);
    expect(result.bands).toBeDefined();
    expect(result.bands.length).toBe(1);
    expect(result.bands[0].name).toEqual(action.name);
  });
  it("adds a band", () => {
    let mockState = {
      bands: [
        { id: 1, name: "Pat the Bunny" },
        { id: 2, name: "Ranshackle Glory" }
      ]
    };

    let action = { type: 'DELETE_BAND', id: mockState.bands[0].id }
    let result = manageBand(mockState, action);
    expect(result.bands).toBeDefined();
    expect(result.bands.length).toBe(mockState.bands.length - 1);
  });
});
