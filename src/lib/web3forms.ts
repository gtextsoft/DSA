export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '2c6e8a6c-10b8-49dc-a43a-b81253879c6a'

export async function submitWeb3Form(formData: FormData) {
  formData.append('access_key', WEB3FORMS_ACCESS_KEY)
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  })
  return response.json() as Promise<{ success: boolean; message?: string }>
}
