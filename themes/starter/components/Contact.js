import { starterConfig } from '../config'
import CONFIG from '../config'
import { SVGEmail } from './svg/SVGEmail'
import { SVGLocation } from './svg/SVGLocation'

/* eslint-disable react/no-unescaped-entities */
export const Contact = () => {
  const url = starterConfig('STARTER_CONTACT_MSG_EXTERNAL_URL')
  return (
    <>
      {/* <!-- ====== Contact Start ====== --> */}
      <section id='contact' className='relative py-20 md:py-[120px]'>
        <div className='absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark'></div>
        <div className='absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2'></div>
        <div className='container px-4'>
          <div className='-mx-4 flex flex-wrap items-center lg:items-start'>
            <div className='w-full px-4 lg:w-7/12 xl:w-7/12'>
              <div className='ud-contact-content-wrapper'>
                <div className='ud-contact-title mb-10 md:mb-14'>
                  <span className='mb-6 block text-base font-medium uppercase tracking-[0.16em] text-primary dark:text-white'>
                    {starterConfig('STARTER_CONTACT_TITLE')}
                  </span>
                  <h2 className='max-w-[520px] text-[32px] font-semibold leading-tight text-dark dark:text-white md:text-[46px]'>
                    {starterConfig('STARTER_CONTACT_TEXT')}
                  </h2>
                </div>

                <div className='mb-8 grid gap-5 md:grid-cols-2 lg:mb-0'>
                  <div className='rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-200 hover:shadow-md dark:border-dark-3 dark:bg-dark-2'>
                    <div className='mb-5 flex items-center'>
                      <div className='mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[26px] text-primary'>
                        <SVGLocation />
                      </div>
                      <h5 className='text-lg font-semibold text-dark dark:text-white'>
                        {starterConfig(
                          'STARTER_CONTACT_LOCATION_TITLE',
                          null,
                          CONFIG
                        )}
                      </h5>
                    </div>
                    <p className='text-base text-body-color dark:text-dark-6'>
                      {starterConfig(
                        'STARTER_CONTACT_LOCATION_TEXT',
                        null,
                        CONFIG
                      )}
                    </p>
                  </div>

                  <div className='rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-200 hover:shadow-md dark:border-dark-3 dark:bg-dark-2'>
                    <div className='mb-5 flex items-center'>
                      <div className='mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[26px] text-primary'>
                        <SVGEmail />
                      </div>
                      <h5 className='text-lg font-semibold text-dark dark:text-white'>
                        {starterConfig(
                          'STARTER_CONTACT_EMAIL_TITLE',
                          null,
                          CONFIG
                        )}
                      </h5>
                    </div>
                    <p className='text-base text-body-color dark:text-dark-6'>
                      {starterConfig('STARTER_CONTACT_EMAIL_TEXT')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {url && url !== '' && (
              <>
                <div className='w-full px-4 pt-6 lg:w-5/12 xl:w-5/12 lg:pt-0'>
                  <div className='rounded-2xl border border-slate-200 bg-[#f8fbff] p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 dark:border-dark-3 dark:bg-dark-2 sm:p-8'>
                    <iframe
                      src={starterConfig(
                        'STARTER_CONTACT_MSG_EXTERNAL_URL',
                        null,
                        CONFIG
                      )}
                      width='100%'
                      height='500px'
                      frameBorder='0'
                      title='Contact form'></iframe>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* <!-- ====== Contact End ====== --> */}
    </>
  )
}
