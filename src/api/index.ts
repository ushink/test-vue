export async function registerUser(name: string, email: string, password: string) {
  const apiUrl = 'https://b24-abbzfx.bitrix24.ru/rest/1/2o685zlpifc530n6/crm.contact.add'
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Connection: 'keep-alive'
      },
      body: JSON.stringify({
        fields: {
          NAME: name,
          EMAIL: [{ VALUE: email }],
          COMMENTS: 'comments'
        }
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.error('Ошибка при регистрации пользователя:', error)
  }
}

export async function getUserList() {
  const apiUrl = 'https://b24-abbzfx.bitrix24.ru/rest/1/2o685zlpifc530n6/crm.contact.list'

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        select: ['ID', 'NAME', 'EMAIL', 'COMMENTS']
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error)
  }
}
