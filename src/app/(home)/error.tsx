"use client";

export default function Error({ error, reset }: ErrorPageProps) {
  // Se puede usar un useEffect para enviar el error algún servicio de terceros
  return (
    <div style={{ padding: "10rem" }}>
      <h1>:c</h1>
      <p>Ha ocurrido un error</p>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  );
}
