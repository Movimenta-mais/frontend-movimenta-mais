import {NextResponse} from "next/server";

import {getEquipamentById} from "@/services/equipamentService";


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const equipment = await getEquipamentById(parseInt(id));

  if (!equipment) {
    return NextResponse.json({ error: "Equipamento não encontrado" }, { status: 404 });
  }

  return NextResponse.json(equipment);
}
