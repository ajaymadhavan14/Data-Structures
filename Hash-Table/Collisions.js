class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const samKeyItem = bucket.find((item) => item[0] === key);
      if (samKeyItem) {
        samKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const samKeyItem = bucket.find((item) => item[0] === key);
      if (samKeyItem) {
        return samKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const samKeyItem = bucket.find((item) => item[0] === key);
      if (samKeyItem) {
        bucket.splice(bucket.indexOf(samKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "AJAY");
table.set("age", 25);
table.display();
table.set("mane", "krishna");
table.display();
console.log(table.table);
