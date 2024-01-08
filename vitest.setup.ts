import "@testing-library/jest-dom/vitest";

// https://github.com/jsdom/jsdom/issues/3002
Range.prototype.getBoundingClientRect = vi.fn();
Range.prototype.getClientRects = () => ({
  item: vi.fn(),
  length: 0,
  [Symbol.iterator]: vi.fn(),
});
