/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import SmartLink from '@/components/SmartLink'

/**
 * 英雄大图区块
 */
export const Hero = props => {
  const config = props?.NOTION_CONFIG || CONFIG
  return (
    <>
      {/* <!-- ====== Hero Section Start --> */}
      <div
        id='home'
        className='relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4'>
              <div
                className='hero-content mx-auto max-w-[780px] text-center opacity-100 visible'>
                {/* 主标题 */}
                <h1 className='mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]'>
                  {siteConfig('STARTER_HERO_TITLE_1', null, config)}
                </h1>
                {/* 次标题 */}
                <p className='mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]'>
                  {siteConfig('STARTER_HERO_TITLE_2', null, config)}
                </p>
                {/* 按钮组 */}
                <ul className='mb-10 flex flex-wrap items-center justify-center gap-5'>
                  {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, config) && (
                    <li>
                      <SmartLink
                        href={siteConfig('STARTER_HERO_BUTTON_1_URL', '')}
                        className='inline-flex items-center justify-center rounded-xl bg-white px-7 py-[14px] text-center text-base font-semibold text-primary shadow-sm transition duration-200 ease-in-out hover:bg-slate-100 hover:text-primary'>
                        {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, config)}
                      </SmartLink>
                    </li>
                  )}
                  {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, config) && (
                    <li>
                      <SmartLink
                        href={siteConfig(
                          'STARTER_HERO_BUTTON_2_URL',
                          null,
                          config
                        )}
                        className='flex items-center rounded-xl border border-white/20 bg-white/10 px-6 py-[14px] text-base font-semibold text-white shadow-sm transition duration-200 ease-in-out hover:border-white/30 hover:bg-white hover:text-primary'>
                        {siteConfig(
                          'STARTER_HERO_BUTTON_2_ICON',
                          null,
                          config
                        ) && (
                          <img
                            className='mr-4'
                            src={siteConfig(
                              'STARTER_HERO_BUTTON_2_ICON',
                              null,
                              config
                            )}
                          />
                        )}
                        {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, config)}
                      </SmartLink>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* 产品预览图片 */}
            {siteConfig('STARTER_HERO_PREVIEW_IMAGE', null, config) && (
              <div className='w-full px-4'>
                <div
                  className='relative z-10 mx-auto max-w-[845px] opacity-100 visible'>
                  <div className='mt-16 overflow-hidden rounded-[18px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(10,18,42,0.18)]'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={siteConfig(
                        'STARTER_HERO_PREVIEW_IMAGE',
                        null,
                        config
                      )}
                      alt={siteConfig('TITLE', null, config)}
                      title={siteConfig('TITLE', null, config)}
                      className='mx-auto w-full object-cover object-center'
                    />
                  </div>

                  {/* 背景图 */}
                  <div className='absolute -left-10 bottom-2 z-[-1]'>
                    <img src='/images/starter/bg-hero-circle.svg' />
                  </div>
                  <div className='absolute -right-6 -top-6 z-[-1]'>
                    <img src='/images/starter/bg-hero-circle.svg' />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 横幅图片 */}
      {siteConfig('STARTER_HERO_BANNER_IMAGE', null, config) && (
        <div className='container'>
          <LazyImage
            priority
            className='w-full'
            src={siteConfig(
              'STARTER_HERO_BANNER_IMAGE',
              null,
              config
            )}></LazyImage>
        </div>
      )}
      {/* <!-- ====== Hero Section End --> */}
    </>
  )
}
