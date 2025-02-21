export default function Footer() {
  return (
    <div className="flex justify-center self-end sm:justify-between">
      <p className="mb-6 text-center text-sm text-gray-600 md:text-base lg:mb-0">
        ©{new Date().getFullYear()} Automatron. All Rights Reserved.
      </p>
      <ul className="hidden flex-wrap items-center text-gray-600 sm:flex sm:flex-nowrap">
        <li className="mr-12">
          <a target="blank" href="mailto:hello@automatron.com" className="text-sm">
            Support
          </a>
        </li>
        <li className="mr-12">
          <a target="blank" href="*" className="text-sm">
            License
          </a>
        </li>
        <li className="mr-12">
          <a target="blank" href="*" className="text-sm">
            Terms of Use
          </a>
        </li>
      </ul>
    </div>
  )
}
