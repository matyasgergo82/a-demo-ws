import ShareButtons from "@/shared/ShareButtons";

export default function CircleCutCeramicVase() {
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
        src="/images/circle-cut-ceramic-vase.jpg"
        alt="Circle-Cut Ceramic Vase"
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
        <h1>Circle-Cut Ceramic Vase</h1>
        <p style={{ fontSize: "1.1rem" }}>
          A statement piece handcrafted on the potter’s wheel, finished with a
          matte eggshell glaze and our signature circle-cut window.
        </p>
        <ul>
          <li>Handmade in Hungary</li>
          <li>Height: 25 cm · Ø 14 cm</li>
          <li>Water-tight, dishwasher safe</li>
          <li>
            Price: <strong>€48.00</strong>
          </li>
        </ul>
        <p>
          Pair it with dried pampas grass or fresh tulips—either way, the
          geometric silhouette draws the eye.
        </p>
        <ShareButtons />
      </div>
    </section>
  );
}
