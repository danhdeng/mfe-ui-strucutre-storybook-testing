import { render } from "@testing-library/react";
import { ProductCard } from ".";

describe("ProductCard", () => {
  it("renders", () => {
    const { queryAllByText } = render(
      <ProductCard title="Movie Show" description="Display movie here" />
    );
    expect(queryAllByText("Movie Show")).toHaveLength(1);
  });
});
