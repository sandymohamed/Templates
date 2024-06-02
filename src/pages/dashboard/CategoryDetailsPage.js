import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { m } from 'framer-motion';
// @mui
import { useTheme, } from '@mui/material/styles';
import { Grid, Container, Typography, Divider, } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings';
import { MotionViewport, varFade } from '../../components/animate';
import Footer from './Footer';
// sections
import ProductDetailsCarousel from '../../sections/carousel/ProductDetailsCarousel';

import { useLocales } from '../../locales';
import en from '../../locales/langs/en';

// ----------------------------------------------------------------------

const ITEMS = [
  {
    icon: "mdi:soldering-iron",
    link: 'one',
    title: "item 1",
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 'https://images.pexels.com/photos/18254876/pexels-photo-18254876/free-photo-of-waves-by-the-rocky-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 'https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."],
    description_ar: ["وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني."],
  },
  {
    icon: "logos:fabric",
    link: 'two',
    title: "item 2",
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."],
    description_ar: ["وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني."],

  }

]

// ----------------------------------------------------------------------

export default function CategoryDetailsPage() {
  const { themeStretch } = useSettingsContext();
  const { translate, currentLang } = useLocales();

  const theme = useTheme();

  const { name } = useParams();



  const [category, setCategory] = useState('description');


  const enCategories = en.nav.categories;
  const thisCategory = enCategories.map((i, ind) => {
    if (i.link === name) {
      return ind;
    }
    return null;
  });

  const categoryIndex = thisCategory.find(i => i !== null);


  const description = currentLang.value === "en" ? category.description_en : category.description_ar


  useEffect(() => {
    console.log(theme);
    if (name) {
      setCategory(ITEMS.find(item => item.link.toLocaleLowerCase() === name.toLocaleLowerCase())
      )
    }

  }, [name, theme]);


  return (
    <>
      <Helmet>
        <title>{`Khairy Trading Industrial: ${category?.title || ''} `}</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'} sx={{ p: 6, mt: 12 }} component={MotionViewport}>
        <CustomBreadcrumbs
          heading="category Details"
          links={[
            { name: 'Home', href: PATH_PAGE.root },


            { name: category?.title },
          ]}
        />

        {category && (

          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={7}>
              <ProductDetailsCarousel product={category} />
            </Grid>

            <Grid item xs={12} md={6} lg={5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="h2" sx={{ mb: 3 }}>

                  {translate(`nav.categories.${categoryIndex}.title`)}

                </Typography>
              </m.div>
              {
                description?.map((item, i) => (

                  <m.div variants={varFade().inRight} key={i}>
                    <Typography
                      sx={{
                        color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                      }}
                    >
                      {item}
                    </Typography>
                  </m.div>

                ))
              }



            </Grid>
          </Grid>

        )}


      </Container>
      <br />
      <br />
      <br />
      <Divider />
      <Footer />
    </>
  );
}
