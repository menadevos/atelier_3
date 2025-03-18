const processText = (mytext) => 
    mytext

        .split(",")                      
        .map(line => line.toUpperCase())  
        .filter(line => line.includes("I")) 
        .forEach(line => console.log(line)); 
const mytext = `In a world full of complexity, simplicity stands out. Whether in design, communication, or problem-solving, keeping things simple often leads to better results. Simplicity does not mean a lack of depth; rather, it allows for clarity and efficiency.

Take technology, for example. The most successful apps and websites are those that provide a smooth and intuitive experience. The same principle applies to writing—clear and concise messages are more powerful than long, complicated ones.

Embracing simplicity in everyday life can reduce stress, improve focus, and lead to greater creativity. Sometimes, less truly is more.`;

processText(mytext);
