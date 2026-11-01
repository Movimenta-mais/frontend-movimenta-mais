import {NextResponse} from "next/server";
import {Equipament} from "../../../types/equipamentTypes";

const equipmentData: Equipament[] = [
    { 
        id: 1, 
        name: "Simulador de Pernas Duplo", 
        instructions: "Passo 1: Apoie os pés na plataforma e mantenha as costas firmes. Passo 2: Flexione os joelhos lentamente e, em seguida, empurre a plataforma até quase estender as pernas. Passo 3: Retorne de forma controlada.",
        imageUrl: "https://images.unsplash.com/photo-1612832021060-1f3e4b8c5f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },

    { 
        id: 2, 
        name: "Simulador Cavalgada", 
        instructions: "Passo 1: Sente-se no aparelho, apoie os pés nos pedais e segure as barras. Passo 2: Empurre os pedais com as pernas enquanto movimenta as barras com os braços, simulando o movimento de cavalgar. Passo 3: Mantenha as mãos e pés firmes nas plataformas.",
        imageUrl: "https://images.unsplash.com/photo-1612832021060-1f3e4b8c5f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
]

export async function GET() {
    return NextResponse.json(equipmentData);
}
