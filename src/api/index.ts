// Создание нового контакта
export async function registerUser(name: string, email: string) {
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
          COMMENTS: 'Пользователь только зарегистрировался. Тест не пройден.'
        }
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Ошибка при регистрации пользователя:', error)
    return []
  }
}

// Получение списка всех контактов
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

    return await response.json()
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error)
    return []
  }
}

// Обновление комментария контакта
export async function updateUser(comments: string, id: number) {
  const apiUrl = 'https://b24-abbzfx.bitrix24.ru/rest/1/2o685zlpifc530n6/crm.contact.update'

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Connection: 'keep-alive'
      },
      body: JSON.stringify({
        id,
        fields: {
          COMMENTS: comments
        },
        params: {
          REGISTER_SONET_EVENT: true
        }
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Ошибка при обновлении пользователя:', error)
    return []
  }
}
