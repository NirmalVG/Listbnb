import useAdvertisementDetails from "@/logic/useAdvertisementDetails";

const AdDetailPage = () => {
  const { data, error, isLoading } = useAdvertisementDetails();

  console.log(data, "data");

  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error loading products</div>
    );
  return (
    <>
      <div className="grid grid-cols-2 mx-44 gap-8 mt-10 mb-10 h-full	my-auto">
        <div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">{data.title} </h1>
            <div className="flex items-center justify-between">
              {/* <div className="text-sm text-gray-500">
                New York, United States · Nov 29, 2023, 10:30am
              </div> */}
              {/* <div className="text-[#FF0066] text-2xl font-bold">$599</div> */}
            </div>
          </div>
          <div>
            <img
              src={data.image}
              alt={data.title}
              className="w-full rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Overview</h2>
            <div className="text-gray-600 space-y-4">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
        <div>
          {/* <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Astoria"
                  />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">Astoria D. Dowson</h2>
                  <p className="text-sm text-gray-500">5.0 (3 Reviews)</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>+88 xxxx xxxx xxxx</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>info@xxxxxxxx.xxx</span>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </>
  );
};

export default AdDetailPage;
