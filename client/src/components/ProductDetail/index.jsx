import React, { useState } from "react";
import { Breadcrumbs } from "@mui/material";
import { data, Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Collapse } from "react-collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useUser } from "@clerk/clerk-react";
import { useForm, Controller } from "react-hook-form";
import ProductInfo from "./ProductInfo";
function createData(name, details) {
  return { name, details };
}
// table rows
const rows = [
  createData("weight", "159gm"),
  createData("Color", "Black"),
  createData("Brand", "Adidas"),
  createData("Type", "Sports"),
  createData("Mnufacturer", "Adidas India"),
];

const ProductDetails = () => {
  const { user } = useUser();
  const { register, handleSubmit, reset, control } = useForm();
  const [reviews, setReviews] = useState([
  ]);
  // review handler
  const onSubmit = (data) => {
    if (!user) return;
    const today = new Date();
    setReviews([
      {
        name: user.fullName || user.username || "User",
        date: today.toLocaleDateString(),
        text: data.review,
        image: user.imageUrl,
        rating: data.rating,
      },
      ...reviews,
    ]);
    reset();
  };

  const [openInfo, setOpenInfo] = useState(null); // Default close
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setOpenInfo(newValue === 0); // Show description if first tab, else hide
  };

  const product = {
    name: "Casual Shoes",
    category: "Sports",
    price: 100,
    offerPrice: 80,
    rating: 4,
    images: [
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png",
    ],
    description: [
      "High-quality material",
      "Comfortable for everyday use",
      "Available in different sizes",
    ],
  };

  const [thumbnail, setThumbnail] = useState(product.images[0]);

  return (
    product && (
      <div className="!rounded-lg w-full px-6 !h-full !my-20 border-zinc-600 !p-20 !pt-10 shadow-lg">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            className="link transition-all"
            color="inherit"
            to="/"
          >
            Home
          </Link>
          <Link
            className="link transition-all"
            underline="hover"
            color="inherit"
            to="/productListing"
          >
            Fashion
          </Link>
          <span className="text-indigo-500">{product.name}</span>
        </Breadcrumbs>
       <ProductInfo padding="!p-8"/>
        <Box
          className="flex flex-col !w-full !items-start !justify-center gap-5 !mt-10"
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          <Tabs value={value} onChange={handleChange} centered>
            <Tab onClick={() => setOpenInfo(0)} label="Description" />
            <Tab onClick={() => setOpenInfo(1)} label="Product Detail" />
            <Tab onClick={() => setOpenInfo(2)} label={`Reviews(${reviews.length})`} />
          </Tabs>
          <Collapse isOpened={openInfo === 0}>
            <div className="description text-xl shadow-md flex flex-col gap-10 !w-full rounded-md !h-[fit] !px-4 !py-3">
              {/* ...description content... */}
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo ullam esse quod repellendus corporis aliquid earum cupiditate, excepturi eveniet officiis totam ratione fugiat ex iste distinctio cum maxime mollitia repellat maiores rerum. Non beatae explicabo ea sint adipisci, iusto asperiores debitis autem nam obcaecati tempora dolores harum id quos! Accusamus sequi nulla aut maiores! Blanditiis vel aperiam repudiandae beatae vitae maxime, quasi, obcaecati saepe, placeat repellat earum! Beatae modi ducimus voluptatem voluptatum, voluptate voluptas repudiandae iste praesentium, tempora, iusto magnam saepe? Nulla pariatur voluptatibus rerum maxime odio quas impedit molestias culpa, quaerat minima earum expedita sit! Laborum, quae inventore?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo ullam esse quod repellendus corporis aliquid earum cupiditate, excepturi eveniet officiis totam ratione fugiat ex iste distinctio cum maxime mollitia repellat maiores rerum. Non beatae explicabo ea sint adipisci, iusto asperiores debitis autem nam obcaecati tempora dolores harum id quos! Accusamus sequi nulla aut maiores! Blanditiis vel aperiam repudiandae beatae vitae maxime, quasi, obcaecati saepe, placeat repellat earum! Beatae modi ducimus voluptatem voluptatum, voluptate voluptas repudiandae iste praesentium, tempora, iusto magnam saepe? Nulla pariatur voluptatibus rerum maxime odio quas impedit molestias culpa, quaerat minima earum expedita sit! Laborum, quae inventore?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo ullam esse quod repellendus corporis aliquid earum cupiditate, excepturi eveniet officiis totam ratione fugiat ex iste distinctio cum maxime mollitia repellat maiores rerum. Non beatae explicabo ea sint adipisci, iusto asperiores debitis autem nam obcaecati tempora dolores harum id quos! Accusamus sequi nulla aut maiores! Blanditiis vel aperiam repudiandae beatae vitae maxime, quasi, obcaecati saepe, placeat repellat earum! Beatae modi ducimus voluptatem voluptatum, voluptate voluptas repudiandae iste praesentium, tempora, iusto magnam saepe? Nulla pariatur voluptatibus rerum maxime odio quas impedit molestias culpa, quaerat minima earum expedita sit! Laborum, quae inventore?</p>
            </div>
          </Collapse>
          <Collapse isOpened={openInfo === 1}>
            <div className="productDetail text-xl w-full shadow-md flex flex-col  gap-10 !w-full rounded-md  ">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          className="!capitalize !text-xl !text-gray-500"
                          component="th"
                          scope="row"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell className="!text-lg" align="right">
                          {row.details}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Collapse>
                   <Collapse isOpened={openInfo === 2}>
            <div className="review text-xl shadow-md flex !h-[fit] flex-col gap-4 !w-full !rounded-md !px-4 !py-5">
              <h2 className="!text-2xl">Customer Questions & Answers</h2>
              <div className="scroll overflow-y-scroll !w-[87vw] min-h-0 max-h-[20vw]">
                <div className="reviews gap-4 flex h-fit items-center justify-between flex-col w-full">
                  {reviews.length === 0 ? (
                    <div className="text-center text-gray-500 py-8 text-lg">
                      No review available
                    </div>
                  ) : (
                    reviews.map((review, idx) => (
                      <div key={idx} className="info shadow-xl relative w-full rounded-md flex items-center ">
                        <div className="img w-[5vw] absolute top-0 h-[5vw] !p-4">
                          <img
                            className="w-[3vw] h-[3vw] rounded-full border-1"
                            src={review.image}
                            alt={review.name}
                          />
                        </div>
                        <div className="!ml-10 !py-3 !px-10">
                          <h2 className="!text-md">{review.name}</h2>
                          <h3 className="text-sm">{review.date}</h3>
                          <p className="text-sm">{review.text}</p>
                         
                        </div>
                        <Rating
                            value={review.rating}
                             className="!absolute right-0 top-3"

                            precision={0.5}
                            readOnly
                            size="small"
                          />
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="AddReview bg-zinc-200 w-[100%] rounded-xl !px-6">
                <h1 className="text-2xl font-[500] text-zinc-800 !p-4 !mb-2">Add a Review</h1>
                <div className="presentInfo flex !px-2 items-center !w-full">
                  <div className="w-[3vw]  h-[3vw] userImage">
                    <img className="w-full h-full rounded-full" src={user?.imageUrl} alt="" />
                  </div>
                  <div className="nameAndDate">
                    <h2 className="!text-md !p-2 !capitalize">
                      {user?.username}{user?.lastName ? " " + user?.lastName : ""}
                    </h2>
                    <h2 className="!text-[1vw] !pb-2 !px-2 !capitalize">{new Date().toLocaleDateString()}</h2>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative mb-2 w-full">
                    <textarea
                      {...register("review", { required: true })}
                      rows={4}
                      placeholder="Write Your Review"
                      className="border-1 z-2 rounded-md !px-4 !pt-3 w-[70%] bg-white !focus-none !border-none !resize-none"
                      style={{ minHeight: "15rem" }}
                    />
                  </div>
                  <div className="flex items-center !px-4 gap-2 mb-2">
                    <span className="!text-[1.1vw]  !mt-5">Your Rating:</span>
                    <Controller
                      name="rating"
                      control={control}
                      defaultValue={5}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Rating
                          className="!mt-5"
                          {...field}
                          value={Number(field.value)}
                          precision={0.5}
                          onChange={(_, value) => field.onChange(value)}
                        />
                      )}
                    />
                  </div>
                  <input
                    type="submit"
                    className="bg-blue-500 !mt-2 !px-5 !mb-4  !ml-3 text-white !font-[500]  !py-2 rounded-md cursor-pointer"
                  />
                </form>
              </div>
            </div>
          </Collapse>
        </Box>
      </div>
    )
  );
};

export default ProductDetails;