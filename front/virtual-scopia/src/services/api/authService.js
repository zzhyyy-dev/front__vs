export const loginUser = async (email, password) => {
  let userType = '';

  if (email.startsWith('admin')) {
      userType = 'administrator';
  } else if (email.startsWith('prof')) {
      userType = 'teacher';
  } else if (email.startsWith('student')) {
      userType = 'student';
  } else {
      throw new Error('Tipo de usuário desconhecido');
  }

  try {
      const response = await fetch(`http://localhost:8080/auth/login`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              userType: userType,
              email: email,
              password: password
          }),
      });

      const data = await response.json();

      if (!response.ok) {
          throw new Error(data.message || 'Erro ao tentar logar');
      }

      return data;
  } catch (error) {
      console.error('Erro ao realizar o login:', error);
      throw error;
  }
};

export const getUserInfo = async (userType, userId) => {
  try {
    const response = await fetch(`http://localhost:8080/users/${userType}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar informações do usuário');
    }

    const data = await response.json();
    return data; // Retorna os dados do usuário
  } catch (error) {
    console.error('Erro ao buscar informações do usuário:', error);
    throw error;
  }
};


export const getProvas = async (userId) => {
  try {
    const response = await fetch(`http://localhost:8080/challenges/student/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar as provas do aluno');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar as provas:', error);
    throw error;
  }
};

export const getCompetencias = async (userId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/student-competences/student/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar as competências do aluno');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar as competências:', error);
    throw error;
  }
};

export const getTurmasProfessor = async (teacherId) => {
  try {
    const response = await fetch(`http://localhost:8080/school/teacher/${teacherId}/classes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Erro ao buscar as turmas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar as turmas:', error);
    throw error;
  }
};


export const getAlunosTurma = async (classId) => {
  try {
    const response = await fetch(`http://localhost:8080/school/class/${classId}/students`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar os alunos da turma');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Erro ao buscar os alunos da turma:', error);
    throw error;
  }
};

export const getAllClasses = async () => {
  try {
    const response = await fetch('http://localhost:8080/school/classes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar todas as turmas');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Erro ao buscar todas as turmas:', error);
    throw error;
  }
};

export const getAllStudents = async () => {
  try {
    const response = await fetch('http://localhost:8080/users/student', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar todos os alunos');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Erro ao buscar todos os alunos:', error);
    throw error;
  }
};


export const getAllTeacher = async () => {
  try {
    const response = await fetch('http://localhost:8080/users/teacher', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar todos os alunos');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Erro ao buscar todos os alunos:', error);
    throw error;
  }
};

export const addTeacher = async (teacher) => {
  try {
    const response = await fetch('http://localhost:8080/users/teacher', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teacher),
    });

    if (!response.ok) {
      throw new Error('Erro ao adicionar o professor');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Erro ao adicionar o professor:', error);
    throw error;
  }
};

export const addStudent = async (teacher) => {
  try {
    const response = await fetch('http://localhost:8080/users/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teacher),
    });

    if (!response.ok) {
      throw new Error('Erro ao adicionar o professor');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Erro ao adicionar o professor:', error);
    throw error;
  }
};

export const addTurma = async (teacher) => {
  try {
    const response = await fetch('http://localhost:8080/school', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teacher),
    });

    if (!response.ok) {
      throw new Error('Erro ao adicionar o Turmas');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Erro ao adicionar o Turmas:', error);
    throw error;
  }
};

export const deleteUser = async (userType, id) => {
  try {
    const response = await fetch(`http://localhost:8080/users/${userType}/${id}/deactivate`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao desativar o usuário: ${response.statusText}`);
    }

    console.log(`Usuário ${id} do tipo ${userType} desativado com sucesso.`);
    return true;
  } catch (error) {
    console.error('Erro ao desativar o usuário:', error);
    return false;
  }
};

export const deleteTurma = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/school/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao desativar o usuário: ${response.statusText}`);
    }

    console.log(`Turma ${id} desativado com sucesso.`);
    return true;
  } catch (error) {
    console.error('Erro ao desativar o usuário:', error);
    return false;
  }
};

export const provasTeacher = async (teacherId) => {
  try {
    const response = await fetch(`http://localhost:8080/challenges/teacher/${teacherId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar as provas do professor');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar as provas do professor:', error);
    return [];
  }
};


export const Exercicios = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/exercises`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar os exercicios');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar os exercicios:', error);
    return [];
  }
};


export const addSession = async (exercises, difficulty) => {
  // Mapeia os exercícios no formato esperado pela API
  const exercisesData = exercises.map((exercise, index) => ({
    order: index + 1,          // Ordem do exercício na sequência
    exercises_id: exercise.id,  // ID do exercício
  }));

  // Estrutura o corpo da solicitação
  const body = {
    exercises: JSON.stringify(exercisesData), // Serializa o array para uma string JSON
    difficulty: difficulty,                   // Define a dificuldade passada como argumento
    active: "true",                           // Sempre definido como true
  };

  try {
    const response = await fetch('http://localhost:8080/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    

    if (!response.ok) {
      throw new Error('Erro ao criar sessão');
    }

    const data = await response.json();
    console.log(data)
    return data; // Retorna a resposta da API
  } catch (error) {
    console.error('Erro ao criar sessão:', error);
    throw error;
  }
};

export const createChallenge = async (challengeSessionId, description, teacherId, name) => {
  const body = {
    challengeSessionId,
    description,
    teacherId,
    name,
  };

  try {
    const response = await fetch('http://localhost:8080/challenges/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar o desafio');
    }

    const data = await response.json();
    console.log("Desafio criado com sucesso:", data);
    return data; // Retorna a resposta da API
  } catch (error) {
    console.error('Erro ao criar o desafio:', error);
    throw error;
  }
};