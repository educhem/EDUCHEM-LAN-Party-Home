export default function() {
    return <main style={{ height: "calc(100vh - 100px)", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center" }}>
            <h1>Tato stránka je v productionu za reverse proxynou ¯\(ツ)/¯</h1>
            <p>Pokud aktuálně jsi na production stránce, tak systém asi spadl...</p>
        </div>
    </main>
}