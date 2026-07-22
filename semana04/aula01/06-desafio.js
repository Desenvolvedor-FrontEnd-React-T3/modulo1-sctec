// ATIVIDADE 2 — Chamada da turma 🎒
// Imprima a lista de presença numerada a partir de 1, no formato
// Escolha um nome qualquer para mostrar como "Ausente"
// "1 - Ana".
// "5 - Felipe (Ausente)"

const students = ["Ana", "Bruno", "Carla", "Diego", "Eduarda", "Felipe", "Gustavo"]

for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1} - ${students[i]} ${students[i] == "Felipe" ? "(Ausente)" : ""}`);
}
