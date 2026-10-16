/**
 * Site-wide on/off switches.
 *
 * showTours: when false, the Cusco and Bolivia tour cards, the tour pages and
 * all "book tours with Isabel" wording are hidden. The Viajes page stays up
 * with only the travel guides, and the visa checker shows the no-visa result
 * in place instead of redirecting to tours. Tour data and copy are kept, so
 * flipping this back to true restores everything.
 */
export const siteFeatures = {
  showTours: false,
} as const;
