import { fetchTypes } from '../../utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allTypes = await fetchTypes()
  return json(allTypes)
}