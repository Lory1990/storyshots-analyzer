import Head from "next/head"

//https://sitechecker.pro/it/open-graph/
//https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
//https://support.google.com/webmasters/answer/79812?hl=it
//https://gist.github.com/EvanBacon/7fd4dc3be3d00096579bb0b134c56ec7

//Please add fb:app_id

export interface ICustomHeadProps {
    description?: string
    title?: string
    url?: string
    type?: string
    image?: string
    imageWidth?: string
    imageHeight?: string
}

const CustomHead: React.FC<ICustomHeadProps> = ({ type = "website", url: urlProps = "https://lory1990.github.io/", ...props }) => {
    const description = props.description
    const title = props.title ? "Storybook Snapshot Analyzer | " + props.title : "Storybook Snapshot Analyzer"
    const url = urlProps?.startsWith("http") ? urlProps : "https://lory1990.github.io/" + urlProps
    const image = props.image?.startsWith("http") ? props.image : "https://lory1990.github.io/" + props.image

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            <meta property="og:locale" content={"it-IT"} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Storybook - Snapshot Analyzer" />

            <meta property="og:image:width" content={props.imageWidth} />
            <meta property="og:image:height" content={props.imageHeight} />

            <meta name="twitter:image" content={image} />
            <meta name="twitter:summary_large_image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content={url} />
            <meta name="twitter:creator" content="" />
        </Head>
    )
}

export default CustomHead
