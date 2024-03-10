import { getByRole, getByTestId, render } from "@testing-library/react";
import LevelIndicator from "./LevelIndicator";

describe(LevelIndicator, () => {
    // Test 1
    it("Ensure the lowest bar is selected initially ", () => {
        const { getByTestId } = render(<LevelIndicator />);
        const initialButtonClass = getByTestId("Level1").className;
        expect(initialButtonClass).toContain("clicked");
    }) 
})