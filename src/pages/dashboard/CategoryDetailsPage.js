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
    link: 'steel',
    title: "Steel Division",
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 'https://images.pexels.com/photos/18254876/pexels-photo-18254876/free-photo-of-waves-by-the-rocky-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 'https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: [''],
    description_ar: [''],
  },
  {
    icon: "logos:fabric",
    link: 'welding',
    title: "Welding Devision",
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: ['Weldding Section is the most important part in the working field since it combines the parts to form finish product'],
    description_ar:[ 'يعتبر قسم اللحام من اهم الاقسام في الشركه حيث يتم فيه تجميع الاعمال ولحامها وتختلف نوعيه اللحام وكيفيته بأختلاف الشغله واختلاف الخامه فيوجد اللحام بالقوس الكهربائى واللحام بغاز الاستلين كما يوجد اللحام باستخدام الغاز الخامل (الارجون) كما يساعد على اخراج المشغولات بجوده عاليه وجود مهندسين لحام للاشرف على العماله المدربه والمؤهله.','أنواع اللحام :','1- لحام االلكترود 8107-3106','2- لحام ميج','3- لحام تيج','4- لحام ليزر'],

    //     description_ar: 'يعتبر قسم اللحام من اهم الاقسام في الشركه حيث يتم فيه تجميع الاعمال ولحامها وتختلف نوعيه اللحام وكيفيته بأختلاف الشغله واختلاف الخامه فيوجد اللحام بالقوس الكهربائى واللحام بغاز الاستلين كما يوجد اللحام باستخدام الغاز الخامل (الارجون) كما يساعد على اخراج المشغولات بجوده عاليه وجود مهندسين لحام للاشرف على العماله المدربه والمؤهله.
    //     أنواع اللحام :
    //    * لحام االلكترود 8107-3106
    // *لحام ميج 
    // *لحام تيج
    // *لحام ليزر',
  },
  {
    icon: "emojione-monotone:door",
    link: 'doors',
    title: "Doors Devision",
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: ['Our company fabrication different types of doors such as emergency door,  ordinary doors and fire exit doors etc. STRIAL CO. LTD.'],
    description_ar: [' حيث تقوم الشركه بتصنيع اشكال مختلفه من الابواب الداخليه والخارجيه وابواب القصور وابواب الطوارئ وكذلك الابواب المعزوله.', ' وتقوم الشركه بتصنيع الابواب المعزوله ( ضد الحريق لاقدر الله ) وقد حصلت الشركة على ) شهادة الايزو ۲۰۰۹ ) في تصنيع هذه الابواب المضادة للحريق .', ' كما نقوم في شركة خيري بتصنيع ابواب استانلس ستيل باشكال وزخارف مختلفة'],
  },
  {
    icon: "game-icons:shears",
    link: 'water',
    title: "Water jet Cutting Devision",
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: [''],
    description_ar: [''],
  },
  {
    icon: "game-icons:laserburn",
    link: 'turning',
    title: "Turning and Milling Devision",
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: [''],
    description_ar: [''],
  },
  {
    icon: "lucide:roller-coaster",
    link: 'press',
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: [''],
    description_ar: [''],
  },
  {
    icon: "fluent-emoji-high-contrast:factory",
    link: 'stainless',
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: 'Stainless Steel Devision It is a super specialized section for all types and techniques of stainless steel fabrication such as Front elevations, Column cladding, ceiling and handrail works etc.',
    description_ar: ' وفى هذا القسم نقوم بعمل كل اعمال الاستنلس استيل حسب حاجه العميل من خزانات استنلس استيل - ابواب - الدربزينات - هاندريلات حتى قطع الغيار بالاضافه الى الاشكال الزخرفيه',
  },
  {
    icon: "ic:twotone-devices-fold",
    link: 'cutting',
    images: ['https://images.pexels.com/photos/18254876/pexels-photo-18254876/free-photo-of-waves-by-the-rocky-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: [''],
    description_ar: [''],
  },

  {
    icon: "emojione-monotone:door",
    link: 'rolling',
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: [''],
    description_ar: [''],
  },
  {
    icon: "game-icons:shears",
    link: 'galvanizing',
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: [''],
    description_ar: [''],
  },
  {
    icon: "game-icons:laserburn",
    link: 'Painting',
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: [''],
    description_ar: [''],
  },
  {
    icon: "lucide:roller-coaster",
    link: 'thrading',
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: [''],
    description_ar: [''],
  },
  {
    icon: "fluent-emoji-high-contrast:factory",
    link: 'material',
    images: ['https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'],
    description_en: [''],
    description_ar: [''],
  },

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
