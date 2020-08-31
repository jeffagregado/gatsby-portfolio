import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../styled-components/Section"

const TitleName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #343a40;
  line-height: 1.5;
  text-transform: ${props => (props.primary ? "lowercase" : "uppercase")};
`

const SectionExp = styled(Section)`
  padding-top: 4rem !important;
`

function Experience() {

  return (
    <Layout>
      <SEO title="Experience" />
      <SectionExp>
        <TitleName>Experience</TitleName>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
            delectus consectetur minima temporibus quae consequatur ducimus quo,
            reprehenderit quas cumque ipsum pariatur quis dolorum nisi autem
            suscipit provident nemo numquam. Accusantium asperiores laudantium
            quis minima, quidem veniam eligendi obcaecati odit commodi ipsa
            accusamus adipisci temporibus odio explicabo sunt numquam fugit
            dolorem animi eveniet velit dignissimos possimus laborum distinctio.
            Totam, corrupti? Doloremque dolorem provident excepturi delectus
            optio accusantium molestias quos distinctio, mollitia possimus
            molestiae nostrum laudantium, ipsum labore, autem voluptatibus!
            Mollitia nemo officiis laboriosam provident. Eveniet nostrum tempora
            fugiat suscipit optio. Qui odio ullam perspiciatis nihil, similique
            ipsum blanditiis cumque voluptatum eius officia culpa dicta facere
            hic nostrum excepturi enim non a alias quod, nam magnam tempora
            expedita ratione? Voluptatum, cumque. Quod unde accusamus ullam rem
            est sunt natus labore laboriosam mollitia nobis nihil necessitatibus
            vero laudantium consectetur atque praesentium, dicta harum, nesciunt
            blanditiis impedit tenetur quibusdam. Beatae iusto ipsum quidem.
            Incidunt unde mollitia sequi, perferendis placeat nesciunt porro
            cumque explicabo voluptate. Ex odio quaerat quo tenetur, reiciendis,
            qui placeat architecto quibusdam unde quasi officia quae nihil harum
            dolores, ipsa voluptates. Hic modi fugit suscipit, quo optio natus
            ea distinctio qui dicta possimus recusandae voluptates doloribus ad
            at quisquam impedit explicabo saepe mollitia, ullam quod sit,
            cupiditate architecto quae! At, exercitationem. Sapiente dicta
            reiciendis voluptates quisquam dolorem assumenda deserunt! Delectus
            odio eligendi reprehenderit quis illum vitae aperiam natus corrupti
            ut error maxime eaque veniam doloribus numquam consectetur,
            repudiandae repellat explicabo animi. Corporis dolores eaque nobis
            vero fugit ipsam et assumenda voluptate veritatis minus quis
            perferendis itaque expedita obcaecati nihil blanditiis reiciendis,
            illum commodi aliquam odit saepe dolorum nostrum. Sunt, aperiam
            alias. Voluptates minus sapiente, magnam provident debitis, esse, id
            excepturi laborum minima ducimus quos expedita. Sunt dolorem quae
            cum animi. Vero autem quos harum odit magnam quidem, provident ea
            quibusdam voluptatem!Incidunt unde mollitia sequi, perferendis placeat nesciunt porro
            cumque explicabo voluptate. Ex odio quaerat quo tenetur, reiciendis,
            qui placeat architecto quibusdam unde quasi officia quae nihil harum
            dolores, ipsa voluptates. Hic modi fugit suscipit, quo optio natus
            ea distinctio qui dicta possimus recusandae voluptates doloribus ad
            at quisquam impedit explicabo saepe mollitia, ullam quod sit,
            cupiditate architecto quae! At, exercitationem. Sapiente dicta
            reiciendis voluptates quisquam dolorem assumenda deserunt! Delectus
            odio eligendi reprehenderit quis illum vitae aperiam natus corrupti
            ut error maxime eaque veniam doloribus numquam consectetur,
            repudiandae repellat explicabo animi. Corporis dolores eaque nobis
            vero fugit ipsam et assumenda voluptate veritatis minus quis
            perferendis itaque expedita obcaecati nihil blanditiis reiciendis,
            illum commodi aliquam odit saepe dolorum nostrum. Sunt, aperiam
            alias. Voluptates minus sapiente, magnam provident debitis, esse, id
            excepturi laborum minima ducimus quos expedita. Sunt dolorem quae
            cum animi. Vero autem quos harum odit magnam quidem, provident ea
            quibusdam voluptatem!
            Incidunt unde mollitia sequi, perferendis placeat nesciunt porro
            cumque explicabo voluptate. Ex odio quaerat quo tenetur, reiciendis,
            qui placeat architecto quibusdam unde quasi officia quae nihil harum
            dolores, ipsa voluptates. Hic modi fugit suscipit, quo optio natus
            ea distinctio qui dicta possimus recusandae voluptates doloribus ad
            at quisquam impedit explicabo saepe mollitia, ullam quod sit,
            cupiditate architecto quae! At, exercitationem. Sapiente dicta
            reiciendis voluptates quisquam dolorem assumenda deserunt! Delectus
            odio eligendi reprehenderit quis illum vitae aperiam natus corrupti
            ut error maxime eaque veniam doloribus numquam consectetur,
            repudiandae repellat explicabo animi. Corporis dolores eaque nobis
            vero fugit ipsam et assumenda voluptate veritatis minus quis
            perferendis itaque expedita obcaecati nihil blanditiis reiciendis,
            illum commodi aliquam odit saepe dolorum nostrum. Sunt, aperiam
            alias. Voluptates minus sapiente, magnam provident debitis, esse, id
            excepturi laborum minima ducimus quos expedita. Sunt dolorem quae
            cum animi. Vero autem quos harum odit magnam quidem, provident ea
            quibusdam voluptatem!
          </p>
        </div>
      </SectionExp>
    </Layout>
  )
}

export default Experience
