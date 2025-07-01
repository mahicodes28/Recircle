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
  const [reviews, setReviews] = useState([]);
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
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8 my-8 sm:my-12 md:my-20 rounded-lg shadow-lg bg-white">
        <Breadcrumbs aria-label="breadcrumb" className="mb-4">
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
        <ProductInfo padding="p-2 sm:p-6 md:p-8" />
        <Box
          className="flex flex-col w-full items-start justify-center gap-5 mt-8 sm:mt-10"
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            variant="scrollable"
            scrollButtons="auto"
            className="w-full"
            TabIndicatorProps={{ style: { height: 3 } }}
          >
            <Tab onClick={() => setOpenInfo(0)} label="Description" className="text-xs sm:text-base" />
            <Tab onClick={() => setOpenInfo(1)} label="Product Detail" className="text-xs sm:text-base" />
            <Tab onClick={() => setOpenInfo(2)} label={`Reviews(${reviews.length})`} className="text-xs sm:text-base" />
          </Tabs>
          <Collapse isOpened={openInfo === 0}>
            <div className="description text-base sm:text-lg shadow-md flex flex-col gap-6 w-full rounded-md px-2 sm:px-4 py-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo ullam esse quod repellendus corporis aliquid earum cupiditate, excepturi eveniet officiis totam ratione fugiat ex iste distinctio cum maxime mollitia repellat maiores rerum. Non beatae explicabo ea sint adipisci, iusto asperiores debitis autem nam obcaecati tempora dolores harum id quos! Accusamus sequi nulla aut maiores! Blanditiis vel aperiam repudiandae beatae vitae maxime, quasi, obcaecati saepe, placeat repellat earum! Beatae modi ducimus voluptatem voluptatum, voluptate voluptas repudiandae iste praesentium, tempora, iusto magnam saepe? Nulla pariatur voluptatibus rerum maxime odio quas impedit molestias culpa, quaerat minima earum expedita sit! Laborum, quae inventore?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo ullam esse quod repellendus corporis aliquid earum cupiditate, excepturi eveniet officiis totam ratione fugiat ex iste distinctio cum maxime mollitia repellat maiores rerum. Non beatae explicabo ea sint adipisci, iusto asperiores debitis autem nam obcaecati tempora dolores harum id quos! Accusamus sequi nulla aut maiores! Blanditiis vel aperiam repudiandae beatae vitae maxime, quasi, obcaecati saepe, placeat repellat earum! Beatae modi ducimus voluptatem voluptatum, voluptate voluptas repudiandae iste praesentium, tempora, iusto magnam saepe? Nulla pariatur voluptatibus rerum maxime odio quas impedit molestias culpa, quaerat minima earum expedita sit! Laborum, quae inventore?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo ullam esse quod repellendus corporis aliquid earum cupiditate, excepturi eveniet officiis totam ratione fugiat ex iste distinctio cum maxime mollitia repellat maiores rerum. Non beatae explicabo ea sint adipisci, iusto asperiores debitis autem nam obcaecati tempora dolores harum id quos! Accusamus sequi nulla aut maiores! Blanditiis vel aperiam repudiandae beatae vitae maxime, quasi, obcaecati saepe, placeat repellat earum! Beatae modi ducimus voluptatem voluptatum, voluptate voluptas repudiandae iste praesentium, tempora, iusto magnam saepe? Nulla pariatur voluptatibus rerum maxime odio quas impedit molestias culpa, quaerat minima earum expedita sit! Laborum, quae inventore?</p>
            </div>
          </Collapse>
          <Collapse isOpened={openInfo === 1}>
            <div className="productDetail text-base sm:text-lg w-full shadow-md flex flex-col gap-6 w-full rounded-md px-2 sm:px-4 py-3">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 320 }}>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          className="capitalize text-base sm:text-lg text-gray-500"
                          component="th"
                          scope="row"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell className="text-base sm:text-lg" align="right">
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
            <div className="review text-base sm:text-lg shadow-md flex flex-col gap-4 w-full rounded-md px-2 sm:px-4 py-4">
              <h2 className="text-xl sm:text-2xl mb-2">Customer Questions & Answers</h2>
              <div className="scroll overflow-y-auto w-full min-h-0 max-h-[40vh]">
                <div className="reviews gap-4 flex flex-col w-full">
                  {reviews.length === 0 ? (
                    <div className="text-center text-gray-500 py-8 text-base">
                      No review available
                    </div>
                  ) : (
                    reviews.map((review, idx) => (
                      <div key={idx} className="info shadow-xl relative w-full rounded-md flex flex-col sm:flex-row items-center p-3 gap-3">
                        <div className="img w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                          <img
                            className="w-full h-full rounded-full border"
                            src={review.image}
                            alt={review.name}
                          />
                        </div>
                        <div className="flex-1 py-1 px-2">
                          <h2 className="text-base font-semibold">{review.name}</h2>
                          <h3 className="text-xs text-gray-500">{review.date}</h3>
                          <p className="text-sm">{review.text}</p>
                        </div>
                        <Rating
                          value={review.rating}
                          className="absolute right-2 top-2"
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="AddReview bg-zinc-200 w-full rounded-xl px-2 sm:px-6 py-4">
                <h1 className="text-lg sm:text-2xl font-semibold text-zinc-800 mb-2">Add a Review</h1>
                <div className="presentInfo flex items-center w-full mb-2 gap-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 userImage">
                    <img className="w-full h-full rounded-full" src={user?.imageUrl} alt="" />
                  </div>
                  <div className="nameAndDate">
                    <h2 className="text-base font-semibold capitalize">
                      {user?.username}{user?.lastName ? " " + user?.lastName : ""}
                    </h2>
                    <h2 className="text-xs text-gray-500">{new Date().toLocaleDateString()}</h2>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative mb-2 w-full">
                    <textarea
                      {...register("review", { required: true })}
                      rows={4}
                      placeholder="Write Your Review"
                      className="border rounded-md px-3 pt-2 w-full bg-white focus:outline-none resize-none text-base"
                      style={{ minHeight: "6rem" }}
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm sm:text-base mt-2">Your Rating:</span>
                    <Controller
                      name="rating"
                      control={control}
                      defaultValue={5}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Rating
                          className="mt-2"
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
                    className="bg-blue-500 mt-2 px-5 mb-2 text-white font-semibold py-2 rounded-md cursor-pointer w-full sm:w-auto"
                    value="Submit"
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