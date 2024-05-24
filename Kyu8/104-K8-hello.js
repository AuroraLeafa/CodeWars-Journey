const hello = name => `Hello, ${name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!" : "World!"}`

console.log(hello("joHn"));