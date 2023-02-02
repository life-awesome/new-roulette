function generateHash() {
  return (Math.random() + 1).toString(36).substring(2);
}

export { generateHash };
