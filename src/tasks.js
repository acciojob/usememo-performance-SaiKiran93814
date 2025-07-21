export function generateTasks() {
  const tasks = [];
  for (let i = 1; i <= 50; i++) {
    tasks.push({
      id: i,
      text: `Task #${i}`,
      completed: i <= 25,
    });
  }
  return tasks;
}
