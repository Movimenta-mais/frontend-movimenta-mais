'use server'

import { createClient } from '@supabase/supabase-js'

// Inicializa o cliente do Supabase usando as variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function saveAnamnesisAction(age: number, sex: string) {
  try {
    const { error } = await supabase
      .from('submissions')
      .insert([{ age, sex }])

    if (error) {
      console.error('Erro detalhado do Supabase:', error.message)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    console.error('Erro interno do servidor:', err)
    return { success: false, error: 'Erro interno ao salvar os dados.' }
  }
}
