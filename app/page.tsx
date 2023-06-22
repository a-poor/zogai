import Image from 'next/image'

const messages = [
  {msg: "Hello", left: false},
  {msg: "Hello to you!", left: true},
  {msg: "How are you?", left: false},
  {msg: "I'm good, thanks!", left: true},
  {msg: "How are you?", left: true},
  {msg: "Good!", left: false},
];

function Message({ msg, left }: { msg: string, left: boolean }) {
  return (
    <div className={
      'w-fit px-4 py-1 rounded-2xl '
      + (left ? 'bg-stone-300 self-start rounded-bl-sm' : 'bg-sky-500 self-end rounded-br-sm')
    }>
      <p>{ msg }</p>
    </div>
  );
}

function MessageList({ msgs }: { msgs: {msg: string, left: boolean}[] }) {
  return (
    <div className="max-w-md bg-neutral-100 h-full flex flex-col space-y-2 items-start px-4 py-4">
      {msgs.map((msg, i) => (
        <Message msg={msg.msg} left={msg.left} key={i} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="h-full w-full">
      <MessageList msgs={messages}/>
    </main>
  )
}
