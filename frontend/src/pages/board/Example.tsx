import PageTransition from "@routes/PageTransition"

const Example = () => {
  return (
    <PageTransition>
      <div className="flex h-dvh w-full flex-col items-center justify-center pb-12 2xl:pb-48">
        <span className="mb-12 mt-16 text-4xl font-bold text-emerald-50">
          Example
        </span>
      </div>
    </PageTransition>
  )
}

export default Example
