import ProductImages from '@/app/components/ProductImages';

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row  gap-16">
      {/* IMG */}
      <div className="">
        <ProductImages/>
      </div>
      {/* TEXTS */}
      <div className=''>
        
      </div>
    </div>
  );
};

export default SinglePage;
