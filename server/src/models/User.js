class User {
  constructor(id, username, password, created_at) {
    this.id = id || null;
    this.username = username;
    this.password = password;
    this.created_at = created_at || null;
  }
}

module.exports = User;
