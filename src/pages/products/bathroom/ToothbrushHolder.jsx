import ShareButtons from "@/shared/ShareButtons";

export default function ToothbrushHolder() {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        alignItems: "flex-start",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <img
        src="/images/toothbrush-holder.jpg"
        alt="Toothbrush Holder"
        style={{
          flex: "1 1 300px",
          maxWidth: "400px",
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div style={{ flex: "1 1 300px" }}>
        <h1>Minimalist Toothbrush Holder</h1>
        <p style={{ fontSize: "1.1rem" }}>
          Keep your bathroom neat with our ceramic toothbrush holder featuring a
          non-slip silicone base and drainage holes so brushes dry quickly.
        </p>
        <ul>
          <li>Material: Glazed stoneware</li>
          <li>Size: Ø 6 cm × 11 cm</li>
          <li>Colors: White, Charcoal, Sage</li>
          <li>
            Price: <strong>€13.90</strong>
          </li>
        </ul>
        <p>
          <em>Free shipping</em> on orders over €40 · 30-day returns
        </p>
        <ShareButtons />
      </div>
    </section>
  );
}
