import AdvancedRating from './AdvancedRating.svelte';
import Heart from './Heart.svelte';
import Rating from './Rating.svelte';
import RatingComment from './RatingComment.svelte';
import Review from './Review.svelte';
import ScoreRating from './ScoreRating.svelte';
import Star from './Star.svelte';
import Thumbup from './Thumbup.svelte';
import type { Snippet, Component } from 'svelte';
import { advancedrating, rating, review, scorerating } from './theme';
import type { SVGAttributes, HTMLAttributes } from 'svelte/elements';

interface AdvancedRatingProps {
  rating?: Snippet;
  globalText?: Snippet;
  ratings: { label: string | undefined | null; rating: number }[];
  divClass?: string;
  spanClass?: string;
  div2Class?: string;
  div3Class?: string;
  span2Class?: string;
  unit?: string;
}

interface HeartProps extends SVGAttributes<SVGSVGElement> {
  fillPercent?: number;
  fillColor?: string;
  strokeColor?: string;
  size?: number;
  ariaLabel?: string;
  id?: string;
  role?: string;
  svgClass?: string;
}

interface RatingProps {
  children?: Snippet;
  text?: Snippet;
  divClass?: string;
  size?: number;
  total?: number;
  rating?: number;
  partialId?: string;
  Icon?: Component;
  count?: boolean;
  pClass?: string;
}

interface RatingCommentProps {
  children: Snippet;
  evaluation?: Snippet;
  helpfullink?: string;
  abuselink?: string;
  comment: {
    id?: string;
    user: {
      name?: string;
      img: {
        src: string | undefined | null;
        alt?: string;
      };
      joined?: string;
    };
    total?: number;
    rating: number;
    heading?: string;
    address?: string;
    datetime?: string;
  };
}

type ReviewType = {
  name?: string;
  imgSrc?: string;
  imgAlt?: string;
  address?: string;
  reviewDate?: string;
  title?: string;
  rating?: number;
  item1?: string;
  item2?: string;
  item3?: string;
};

interface ReviewProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  address?: Snippet;
  item1?: Snippet;
  item2?: Snippet;
  item3?: Snippet;
  review?: ReviewType;
  articleClass?: string;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  imgClass?: string;
  ulClass?: string;
  liClass?: string;
}

interface ScoreRatingProps {
  ratings?: { label: string | undefined | null; rating: number }[];
  ratings2?: { label: string | undefined | null; rating: number }[];
  headerLabel?: {
    desc1?: string;
    desc2?: string;
    desc3?: string;
    link?: { label: string | undefined | null; url: string };
  };
}

interface StarProps extends SVGAttributes<SVGSVGElement> {
  fillPercent?: number;
  fillColor?: string;
  strokeColor?: string;
  size?: number;
  ariaLabel?: string;
  id?: string;
  role?: string;
  svgClass?: string;
}

interface ThumbupProps extends SVGAttributes<SVGSVGElement> {
  fillPercent?: number;
  fillColor?: string;
  strokeColor?: string;
  size?: number;
  ariaLabel?: string;
  id?: string;
  role?: string;
  svgClass?: string;
}

export { AdvancedRating, advancedrating, Heart, Rating, rating, RatingComment, Review, review, ScoreRating, scorerating, Star, Thumbup, type AdvancedRatingProps, type HeartProps, type RatingProps, type RatingCommentProps, type ReviewProps, type ScoreRatingProps, type StarProps, type ThumbupProps };
