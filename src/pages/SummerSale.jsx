import ShareButtons from "../shared/ShareButtons";

export default function SummerSale() {
  return (
    <section
      style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
    >
      <img
        src="/images/summer-sale.jpg"
        alt="Summer Sale Banner"
        style={{ width: "400px", borderRadius: "8px", marginBottom: "16px" }}
      />
      <h1>☀️ Summer Sale 2025</h1>
      <ShareButtons />
      <p style={{ fontSize: "1.15rem" }}>
        Up to <strong>40 % OFF</strong> hundreds of home & living favourites
        until <strong>31 August 2025</strong>.
      </p>
      <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: "600px" }}>
        <li>
          Extra 10 % off orders over €100 — automatically applied at checkout.
        </li>
        <li>Free standard shipping across the EU for all sale items.</li>
        <li>
          Loyalty members earn <strong>double points</strong> on every purchase.
        </li>
      </ul>
      <p>Hurry, popular colours sell out fast!</p>
    </section>
  );
}
