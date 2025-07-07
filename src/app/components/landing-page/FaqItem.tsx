interface FaqItemProps {
  title: string;
  description: string;
}
export function FaqItem({ title, description}: FaqItemProps) {
  return (
    <div className="w-[350px] h-min flex flex-col p-5 rounded-2xl border border-border-primary bg-background-primary">
      <h4 className="font-bold text-white">{title}</h4>
      <p className="text-content-body">{description}</p>
    </div>
  )
}