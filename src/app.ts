import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const preguntas = () => {
    rl.question("consulta tus actividades solo con el comand   act  , para salir usar el comando  exit ", (respuesta) => {
        switch (respuesta) {
            case "exit":
                console.warn("Adiós...");
                rl.close();
                break;
            case "act":
                consultandoact();
                break;
            default:
                console.log("No existe...");
                preguntas(); 
                break;
        }
    });
};

preguntas();

const consultandoact = async () => {
    rl.question("Indica el usuario por favor: ", async (respuesta) => {
        const token = "tu token"; 

        try {
            const eventos = await fetch(`https://api.github.com/users/${respuesta}/events`, {
                method: "GET",
                headers: {
                    "User-Agent": "node.js",
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/vnd.github.v3+json",
                },
            });

            if (!eventos.ok) {
                console.log("Ocurrió un problema:", await eventos.json());
                return;
            }

            const data = await eventos.json();
            const acciones_tipo_CreateEvent = data.filter((even: { type: string }) => even.type === "CreateEvent");

            console.log("Eventos de tipo 'CreateEvent':", acciones_tipo_CreateEvent);
        } catch (error) {
            console.error("Error al consultar eventos:", error);
        }

        preguntas(); 
    });
};
